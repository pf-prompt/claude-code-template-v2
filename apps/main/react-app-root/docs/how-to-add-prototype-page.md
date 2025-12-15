# How To Add Prototype Page

Reference `txom-dev\demo` project for full demo code mentioned in this doc

## Tech Stack

React + TypeScript + ccstate (reactive state, jotai like api)

- NO `React.useState`, `React.useEffect`, `React.useMemo` - use ccstate instead
- NO `Map`, `Set`, `Date` in state/API - use JSON stringifyable objects

## Project Structure

```
react-app-root/
├── common/
│   ├── schema/
│   │   ├── schema.ts               # Drizzle table definitions
│   │   └── databaseType.ts         # TypeScript type exports
│   ├── backendApi/                 # API type definitions
│   │   ├── exampleApi.ts
│   │   └── index.ts                # AllApiTypes aggregation
│   └── infra/apiRegistry.ts
├── frontend/
│   ├── main.tsx                    # Application entry point
│   ├── bootstrap.tsx               # Bootstrap logic (routes, prototype, render root)
│   ├── stateTreeRoot.ts            # State tree export aggregation (for Paraflow screen state snapshot)
│   ├── state/                      # Shared State (state$, computed$)
│   ├── commands/                   # Shared Commands (command$)
│   ├── components/                 # Business components (reusable across pages, built on shadcn)
│   ├── ui-components/              # Shadcn UI primitives (base design system components)
│   ├── pages/                      # Page-level components (route-specific, non-reusable)
│   │   ├── index.ts                # Route configs aggregation
│   │   ├── [PageName].tsx          # Business pages (e.g., HomePage, ArticleDetailsPage)
│   │   └── [PageName]/[SubComponent].tsx  # Page-specific sub-components
│   ├── storybook/                  # Design system showcase (not user-facing pages)
│   │   ├── index.ts                # Design system route configs
│   │   ├── DesignSystemStylesPage.tsx     # Theme showcase page
│   │   ├── DesignSystemStylesPage/        # Theme showcase sub-components
│   │   ├── DesignSystemComponentsPage.tsx # Component showcase page
│   │   └── DesignSystemComponentsPage/
│   │       ├── ui-component-showcases/     # UI component examples
│   │       └── business-component-showcases/ # Business component examples
│   ├── prototype/
│   │   ├── mems.ts                  # In-memory data stores
│   │   └── apiImpl/                # API mock implementations
│   └── infra/
│       ├── router/RoutePath.ts
│       └── apiClient.ts
```

## What is Prototype Page in Paraflow

Prototype Page has a browser accessible url. It handles mouse click and touch events. Multiple prototype pages share same `frontend/prototype/mems.ts` file, so user can navigate from one prototype page to another with consistent data.

Paraflow is a editor with interactive designer canvas. The canvas has several screens in snapshot mode. The screen snapshot json file is taken from prototype page via url. We add new prototype page so that we can have more screens on the Paraflow canvas.

This react-app-root project also has a working backend impl. We DO NOT read or write the backend code while prototyping. However, some existing prototype pages might has been connected with the backend code already, while new prototype page only has pure frontend part. For those connected existing pages, the page tsx code might use `common/backendApi` to call the backend. We DO NOT call backendApi when adding a new prototype page. We read write the `frontend/prototype/mems.ts` file directly, WITHOUT defining a RPC api.

## Step 1: Write React Component UI

### Component & Shadcn Theme Usage

Guide for using shadcn ui-components (`frontend/ui-components/`), shadcn theme variables (Tailwind base), and building business components (`frontend/components/`).

#### Component Architecture
**ui-components/** - Design system primitives (shadcn components: Button, Input, Dialog, etc.)

**components/** - Reusable Business components (reusable across pages, built on ui-components)
- **Create when:**
  - Component used across multiple pages (e.g., Layout, Header, UserMenu)
  - Domain-specific UI patterns (e.g., ProductCard, ArticlePreview, CommentList)
  - Common workflows (e.g., SearchBar, FilterPanel, PaginationControls)
  - Shared features (e.g., FileUploader, DateRangePicker, NotificationBadge)
- Must accept `className` prop for customization

**pages/[PageName]/** - Page-specific components (non-reusable)
- Only used within a specific page
- **Create when:**
  - Component tightly coupled to page logic (e.g., CheckoutSummary for CheckoutPage)
  - Complex page-specific sections (e.g., DashboardStatsPanel, ProfileEditForm)
  - One-off UI elements (e.g., HomePageHero, AboutPageTimeline)
  - Page-specific wizards or multi-step flows
- No need for cross-page reusability

#### Core Principles

**Use shadcn ui-components**
- Build pages and components directly with ui-components
- Use component variants when they meet your needs
- Leverage built-in styles and theme integration, control appearance through component variants

**Use theme variables for custom styling**
- When components don't fit your needs or you need custom styling
- Always use theme variables (e.g., `bg-primary`) instead of hardcoded colors (e.g., `bg-[#000000]`) to ensures theme switching works correctly across light/dark modes

**Create business components strategically**
- Reusable across pages → `components/`
- Page-specific only → `pages/[PageName]/`
- Build on ui-components, customize with theme variables
- Must provide `className` prop for flexibility

#### Quick Examples

##### Example 1: Use ui-component variants

```tsx
import { Button } from '../ui-components/Button'
import { Icon } from '../ui-components/Icon'

// Use built-in variants - no custom styling needed
<Button variant="default">
  <Icon icon="lucide:check" className="size-4 mr-2" />
  Primary Action
</Button>
<Button variant="destructive">
  <Icon icon="lucide:trash" className="size-4 mr-2" />
  Delete
</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Menu Item</Button>
```

##### Example 2: Customize ui-component with theme variables

```tsx
import { Button } from '../ui-components/Button'

// Marketing button with glow effect using theme variables
<Button 
  className="bg-primary text-primary-foreground 
             hover:bg-primary/90
             shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
             font-semibold transition-all duration-300
             ring-2 ring-primary/20 hover:ring-primary/30"
>
  Get Started Free
</Button>
```

##### Example 3: Build reusable business component with ui-components

```tsx
// components/ProductCard.tsx
import { cn } from '../infra/cn'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui-components/Card'
import { Button } from '../ui-components/Button'
import { Badge } from '../ui-components/Badge'

interface ProductCardProps {
  className?: string  // Required for all business components
  name: string
  price: number
  category: string
  inStock: boolean
}

export function ProductCard({ 
  className, 
  name, 
  price, 
  category, 
  inStock, 
  onAddToCart 
}: ProductCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant={inStock ? "default" : "secondary"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{category}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-2xl font-bold text-foreground">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="border-t border-border pt-4">
        <Button 
          variant="default" 
          className="w-full"
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Notify Me"}
        </Button>
      </CardFooter>
    </Card>
  )
}

// Usage
<ProductCard 
  name="Wireless Headphones"
  price={99.99}
  category="Electronics"
  inStock={true}
  className="max-w-sm"
/>
```

#### Available Theme Variables

##### All Color Variables

**Note:** `foreground` colors are for text placed on their paired background color (e.g., `bg-primary` → `text-primary-foreground`). **Always define both together** - when you set a background color, always set the corresponding text color on the same element.

- `background` / `foreground`
- `card` / `card-foreground`
- `popover` / `popover-foreground`
- `muted` / `muted-foreground`
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `destructive` (uses `text-white` for text)
- `accent` / `accent-foreground`
- `border`, `input`, `ring`
- `sidebar` / `sidebar-foreground`
- `sidebar-border`, `sidebar-ring`
- `sidebar-primary` / `sidebar-primary-foreground`
- `sidebar-accent` / `sidebar-accent-foreground`
- `chart-1`, `chart-2`, `chart-3`, `chart-4`, `chart-5`
- `surface` / `surface-foreground`
- `code` / `code-foreground`, `code-highlight`, `code-number`
- `selection` / `selection-foreground`

```tsx
// Example 1: Form input - Use ui-component (recommended)
import { Input } from '../ui-components/Input'

// Prefer using Input component - it has built-in theme variables
<Input placeholder="Enter your email" />

// Only customize when needed
<Input 
  placeholder="Search..." 
  className="bg-muted/50 border-primary/20 focus-visible:border-primary"
/>

// Example 2: Chart with theme colors (shadcn Chart component)
import { ChartContainer, ChartTooltipContent } from '../ui-components/Chart'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 600 },
]

<ChartContainer className="h-[200px]">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
    <XAxis dataKey="month" className="text-muted-foreground" />
    <YAxis className="text-muted-foreground" />
    <Tooltip content={<ChartTooltipContent />} />
    {/* Use chart theme variables */}
    <Bar dataKey="sales" fill="hsl(var(--chart-1))" />
  </BarChart>
</ChartContainer>
```

##### Font Variables

- `font-default` - Use in page root (`[PageName].tsx`) to control all fonts
- `font-sans`, `font-mono`, `font-serif` - Use for special cases (e.g., `font-mono` for code blocks)

```tsx
{/* Note (do not delete this comment): The outermost 1.5x pb is used to fix insufficient bottom space when this page is displayed on mobile devices*/}
<div className="font-default bg-background text-foreground min-h-screen flex flex-col pb-[calc(var(--safe-area-inset-bottom)*1.5)]">
  {/* Note (do not delete): First object, outer for background + top safe area(pt), inner for layout */}
  <div className="bg-card text-card-foreground pt-[var(--safe-area-inset-top)]">
    <div className="p-4">
      {/* Example: Header / Navigation */}
      <h1 className="text-lg font-semibold">Page Title</h1>
    </div>
  </div>

  {/* Main content */}
  <main className="flex-1 p-4">
    <p>Regular text uses default font</p>
    <code className="font-mono">Code uses monospace</code>
    <article className="font-serif">Article content uses serif</article>
  </main>

  {/* Note (do not delete): Bottom object, outer for background + bottom safe area(pb), inner for layout */}
  <div className="bg-card text-card-foreground pb-[var(--safe-area-inset-bottom)]">
    <div className="p-4">
      {/* Example: Footer / Bottom navigation */}
    </div>
  </div>
</div>
```

**More theme variable examples**: Check `frontend/pages/DesignSystemStylesPage.tsx` page

##### Safe Area

**Top and bottom safe areas are required for all pages**, regardless of whether it's a mobile device or not. CSS automatically determines whether to display safe areas and their height based on the device type.

**Structure Pattern(Keep these comments for clarity):**
```tsx
{/* Note (do not delete): First object, outer for background + top safe area(pt), inner for layout */}
<div className="bg-card text-card-foreground pt-[var(--safe-area-inset-top)]">
  <div className="p-4">
    {/* Content here */}
  </div>
</div>
```

- **Outer layer** (`bg-card text-card-foreground pt-[var(--safe-area-inset-top)]`): Provides background that extends into the safe area (notch area)
- **Inner layer** (`p-4`): Contains actual content with normal layout padding


## Step 2: Register Page to Route Table

### 2.1 Create Page File

Create page file in `frontend/pages/` directory with naming pattern `[PageName]Page.tsx`:
- `TasksPage.tsx` - Tasks list page
- `HomePage.tsx` - Home page
- `ArticleDetailsPage.tsx` - Article details page

### 2.2 Add New Route to RoutePath.ts

Add route path in `frontend/infra/router/RoutePath.ts`:
```typescript
export type RoutePath = '/' | '/tasks' | '/article/:articleId'
```

Supports dynamic route parameters (using `path-to-regexp` syntax):
- `/tasks` - Static route
- `/article/:articleId` - Dynamic parameter route

### 2.3 Export RouteConfig in Page File

At the bottom of your page file, export a `RouteConfig`:

```typescript
import { RouteConfig } from '../infra/router/routeRegistry'

interface ArticleDetailsPageOptions {
    articleId: string
}

function ArticleDetailsPage({ articleId }: ArticleDetailsPageOptions) {
    return <div>Article {articleId}</div>
}

// For dynamic routes, viewFactory receives routeParams
export const ArticleDetailsRoute: RouteConfig = {
    path: '/article/:articleId',
    viewFactory: (routeParams: Record<string, unknown>) =>
        <ArticleDetailsPage articleId={routeParams.articleId as string} />
}
```

### 2.4 Register Route in Route Table

Import and add your route to `frontend/pages/index.ts`:
```typescript
import { RouteConfig } from '../infra/router/routeRegistry'
import { HomeRoute } from './HomePage'

export const routeConfigs: RouteConfig[] = [
    HomeRoute,
]
```

### Route Navigation

Two methods for navigation (check source code for detailed usage):

- **Method 1: Programmatic Navigation** - `navigateInReact$` from `frontend/infra/router/navigate` (for button clicks, form submissions)
- **Method 2: Declarative Navigation** - `Link` component from `frontend/infra/router/Link` (for text links, navigation menus)

## Step 3: State management within a Prototype Page

### Core Concepts (NO useState, NO useEffect, NO useMemo)

**Primitives:**
- **`state(initialValue)`** - Create mutable state
- **`computed((get) => ...)`** - Derived state with auto-dependency tracking (sync or async)
- **`command(({get, set}) => ...)`** - Side effects (navigation, dialogs, etc.)
- **`instances((options) => ...)`** - Each instance needs **isolated state** based on a unique key

**React Hooks:**
- **`useGet(state$)`** - Read synchronous state
- **`useSet(state$)`** - Update state or execute command
- **`useLoadable(computed$)`** - Read async promise as Loadable Type

**Loadable Type:** `{ state: 'loading' | 'hasData' | 'hasError', data?, error? }` - use the Loadable to render loading UI

### State Organization Pattern

**IMPORTANT**: All `state$` and `computed$` MUST be wrapped in a `xxxState` object and exported to `frontend/stateTreeRoot.ts`. Paraflow canvas need `frontend/stateTreeRoot.ts` to take state snapshot of screens.

#### Define Atomic State

**✅ Correct Pattern:**
```tsx
// Step 1: Define each atom independently first
const title$ = state('')
const content$ = state('')
const lastSubmission$ = state<Promise<boolean> | undefined>(undefined)

// Step 2: Wrap in xxxState object
export const newArticlePageState = {
  title$,
  content$,
  lastSubmission$,
}

// Step 3: command$ is standalone (NOT wrapped in xxxState)
const onSubmit$ = asyncCommand(
  newArticlePageState.lastSubmission$,
  async ({ get, set }) => {
    const title = get(newArticlePageState.title$)
    set(newArticlePageState.title$, '')
    return true
  }
)
```

**❌ Wrong Patterns:**
```tsx
// ❌ Do NOT define atoms inline in the object literal
export const newArticlePageState = {
  title$: state(''),  // Wrong! Define separately first
  content$: state(''),  // Wrong! Define separately first
}

// ❌ Do NOT wrap command$ in xxxState
export const pageState = {
  onSubmit$: command(...)  // Wrong! command$ should be standalone
}
```

#### Reference State use `xxxState.yyy$` pattern

**Always use `xxxState.yyy$` pattern**, even within the same file where state is defined:

**✅ Correct Pattern:**
```tsx
function NewArticlePage() {
  // ✅ Reference via xxxState.yyy$
  const title = useGet(newArticlePageState.title$)
  const setTitle = useSet(newArticlePageState.title$)

  // ✅ command$ can be referenced directly
  const onSubmit = useSet(onSubmit$)

  return <input value={title} onChange={(e) => setTitle(e.target.value)} />
}
```

**❌ Wrong Pattern:**
```tsx
function NewArticlePage() {
  // ❌ Do NOT reference atoms directly
  const title = useGet(title$)  // Wrong! Use newArticlePageState.title$ instead
  const setTitle = useSet(title$)  // Wrong!
}
```

**Why?** Using `xxxState.yyy$` enables cross-atom references and makes state dependencies explicit.

#### Export State to stateTreeRoot

- **Page-specific state**: Export to `frontend/stateTreeRoot.ts`
- **Cross-page shared state**: Export to `frontend/state/index.ts` (auto re-exported by stateTreeRoot)

```tsx
// Page-specific state: frontend/stateTreeRoot.ts
export { newArticlePageState } from './pages/NewArticlePage'

// Cross-page shared state: frontend/state/index.ts
export { homePageState } from './homePageState'
```

### Multi-Instance State Management (instances)

**When to use `instances`:**
- Component renders multiple times with different parameters (e.g., list items, multiple forms)
- Each instance needs **isolated state** based on a unique key (e.g., `articleId`, `userId`)

**Problem without instances:**
```tsx
// ❌ All instances share the same state
const rating$ = state(1)  // Global singleton!

function ArticleReviewForm({articleId}: {articleId: number}) {
  const rating = useGet(rating$)
  // Problem: All forms share the same rating value
}

// When you have multiple forms:
<ArticleReviewForm articleId={1} />  // Rating: 5
<ArticleReviewForm articleId={2} />  // Rating: 5 (same!)
<ArticleReviewForm articleId={3} />  // Rating: 5 (same!)
```

**Solution with instances:**
```tsx
import { instances } from '../../common/ccstatex/instances'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// Define instance factory (creates isolated state per articleId)
export const articleReviewFormInstances = instances(({articleId}: {articleId: number}) => {
  const rating$ = state(1)
  return { rating$ }
})

// Use in component
export function ArticleReviewForm({articleId}: {articleId: number}) {
  const myState = articleReviewFormInstances.getState({articleId})
  const rating = useGet(myState.rating$)
  const setRating = useSet(myState.rating$)

  return (
    <input
      type="number"
      value={rating}
      onChange={(e) => setRating(Number(e.target.value))}
    />
  )
}

// Now each form has independent state:
<ArticleReviewForm articleId={1} />  // Rating: 5 (independent)
<ArticleReviewForm articleId={2} />  // Rating: 3 (independent)
<ArticleReviewForm articleId={3} />  // Rating: 1 (independent)
```

**How instances() works:**
- `instances()` creates a factory that manages state per unique key
- First render with `articleId={1}` creates new state instance
- Re-render with same `articleId={1}` reuses existing instance (preserves state)
- Different `articleId={2}` creates separate instance (isolated state)

### NO useEffect - Use computed$ and Route Parameters Instead

**CRITICAL:** `useEffect` is BANNED. Use ccstate patterns instead:

- ❌ `useEffect` for data fetching → ✅ Use `computed$` (auto-runs)
- ❌ `useEffect` for side effects on change → ✅ Use `command$` triggered by user action
- ❌ `useEffect` for initialization → ✅ Use `computed$` with route param as `state$`

### Prefer computed$ over command$ (Declarative > Imperative)

### Example 1: Async Data Loading

```tsx
import { useLastLoadable, useSet } from 'ccstate-react'
import { navigateInReact$ } from '../infra/router/navigate'
import { Button } from '../ui-components/Button'

const allArticlesDirty$ = state(1)
const allArticles$ = computed(async (get) => {
  get(homePageState.allArticlesDirty$)  // Reference via xxxState.yyy$
  const apiClient = get(apiClient$)
  return await apiClient.getApi('getAllArticles', {})
})

export const homePageState = {
  allArticlesDirty$,
  allArticles$,
}

function HomePage() {
  const loadable = useLastLoadable(homePageState.allArticles$)
  const navigate = useSet(navigateInReact$)

  if (loadable.state === 'loading') {
    return <div>loading...</div>
  } else if (loadable.state === 'hasData') {
    const { articles } = loadable.data
    return (
      <div>
        <Button onClick={() => navigate('/new-article')}>Add Article</Button>
        {articles.map(article => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>
    )
  } else {
    return <div>load failed: {String(loadable.error)}</div>
  }
}

// Then add to frontend/stateTreeRoot.ts:
// export { homePageState } from './pages/HomePage'
```

### Example 2: Form Submission with Command

```tsx
import { useGet, useLoadable, useSet } from 'ccstate-react'
import { state } from 'ccstate'
import { asyncCommand } from '../../common/ccstatex/asyncCommand'
import { apiClient$ } from '../infra/apiClient'
import { homePageState } from '../state/homePageState'
import { navigateInReact$ } from '../infra/router/navigate'
import { Button } from '../ui-components/Button'
import { Input } from '../ui-components/Input'
import { Textarea } from '../ui-components/Textarea'

const title$ = state('')
const content$ = state('')
const lastSubmission$ = state<Promise<boolean> | undefined>(undefined)

export const newArticlePageState = {
  title$,
  content$,
  lastSubmission$,
}

export const onSubmit$ = asyncCommand(
  newArticlePageState.lastSubmission$,
  async ({ get, set }) => {
    await get(apiClient$).postApi('createArticle', {
      title: get(newArticlePageState.title$),
      content: get(newArticlePageState.content$)
    })
    set(newArticlePageState.title$, '')
    set(newArticlePageState.content$, '')
    set(homePageState.allArticlesDirty$, v => v + 1)
    setTimeout(() => set(navigateInReact$, '/'), 3000)
    return true
  }
)

function NewArticlePage() {
  const title = useGet(newArticlePageState.title$)
  const setTitle = useSet(newArticlePageState.title$)
  const content = useGet(newArticlePageState.content$)
  const setContent = useSet(newArticlePageState.content$)
  const lastSubmission = useLoadable(newArticlePageState.lastSubmission$)
  const onSubmit = useSet(onSubmit$)

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
      {lastSubmission.state === 'hasError' && (
        <div>Error: {String(lastSubmission.error)}</div>
      )}
      {lastSubmission.state === 'hasData' && lastSubmission.data && (
        <div>Success!</div>
      )}

      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <Button type="submit" disabled={lastSubmission.state === 'loading'}>
        {lastSubmission.state === 'loading' ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

// Then add to frontend/stateTreeRoot.ts:
// export { newArticlePageState } from './pages/NewArticlePage'
```

**Why use command here?** Form submission needs side effects: clear form, update dirty flag, navigate. For pure data fetching, prefer computed$ (see Example 1).

**Key insight:** The submission state (loading/success/error) is still handled declaratively via `useLoadable(newArticlePageState.lastSubmission$)`. The `asyncCommand` automatically puts the promise into `lastSubmission$`, and `useLoadable` auto-tracks it. Without this pattern, you'd need manual state management:

```tsx
// ❌ Manual state management (verbose)
const loading$ = state(false)
const error$ = state<Error | null>(null)
const success$ = state(false)

export const pageState = {
  loading$,
  error$,
  success$,
}

const onSubmit$ = command(async ({get, set}) => {
  set(pageState.loading$, true)
  set(pageState.error$, null)
  try {
    await api.post(...)
    set(pageState.success$, true)
  } catch (e) {
    set(pageState.error$, e)
  } finally {
    set(pageState.loading$, false)
  }
})

// ✅ asyncCommand pattern (concise)
const lastSubmission$ = state<Promise<boolean> | undefined>(undefined)

export const pageState = {
  lastSubmission$,
}

const onSubmit$ = asyncCommand(pageState.lastSubmission$, async ({get, set}) => {
  await api.post(...)
  return true
})

const loadable = useLoadable(pageState.lastSubmission$)  // Auto loading/hasData/hasError
```

## Step 4: State management between Prototype Pages

### 4.1: Shared State Files (`frontend/state/`)

Do not add new shared state, prefer using `frontend/prototype/mems.ts` as a in memory database.

### 4.2: Direct Read/Write `mems.ts` in Computed$ and Command$

Directly import and modify `mems.ts` objects. DO NOT use `backendApi` or `apiRegistry`.

Every exported data store MUST be typed as `Record<string | number, ...>` for consistent key-value access patterns.

**Define data in mems.ts:**
```tsx
// frontend/prototype/mems.ts
export type Article = {
  id: number
  title: string
  content: string
}

export const ArticleMem: Record<string, Article> = {
  '1': { id: 1, title: 'First Article', content: '...' },
}
```

**Read from mems:**
```tsx
import { computed, state } from 'ccstate'
import { ArticleMem } from '../prototype/mems'

const articleId$ = state('1')
const article$ = computed((get) => {
  const id = get(articleDetailPageState.articleId$)
  return ArticleMem[id]  // Direct read
})

export const articleDetailPageState = {
  articleId$,
  article$,
}
```

**Write to mems:**
```tsx
import { command } from 'ccstate'
import { ArticleMem } from '../prototype/mems'
import { articleListState } from '../state/articleListState'

// Commands can be standalone (not wrapped in xxxState)
const createArticle$ = command(({ get, set }, title: string, content: string) => {
  const newId = Object.keys(ArticleMem).length + 1
  ArticleMem[String(newId)] = {  // Direct write
    id: newId,
    title,
    content
  }
  // Trigger refresh for other pages, optional
  set(articleListState.articlesDirty$, v => v + 1)
})
```

**Key points:**
- **New prototype pages**: Directly import and read/write `frontend/prototype/mems.ts` shared object
- **NO** `apiClient$`, **NO** `backendApi`, **NO** `apiRegistry`
- Use dirty flag pattern (`state(1)`) to trigger re-render after modifying mems