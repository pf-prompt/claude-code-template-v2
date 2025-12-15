/**
 * DesignSystemComponentsPage
 * Displays UI component showcase organized by categories
 */

import { useGet, useSet } from 'ccstate-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui-components/Tabs'
import { ToggleGroup, ToggleGroupItem } from '../ui-components/ToggleGroup'
import { ComponentCard } from './DesignSystemComponentsPage/ComponentCard'
import { Empty, EmptyHeader, EmptyDescription } from '../ui-components/Empty'

// Foundation showcases
import { IconShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/IconShowcase'
import { ButtonShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/ButtonShowcase'
import { ButtonGroupShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/ButtonGroupShowcase'
import { BadgeShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/BadgeShowcase'
import { AvatarShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/AvatarShowcase'
import { KbdShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/KbdShowcase'
import { SpinnerShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/SpinnerShowcase'
import { SkeletonShowcase } from './DesignSystemComponentsPage/ui-component-showcases/foundation/SkeletonShowcase'

// Forms showcases
import { LabelShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/LabelShowcase'
import { InputShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/InputShowcase'
import { TextareaShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/TextareaShowcase'
import { CheckboxShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/CheckboxShowcase'
import { SwitchShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/SwitchShowcase'
import { SelectShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/SelectShowcase'
import { NativeSelectShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/NativeSelectShowcase'
import { SliderShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/SliderShowcase'
import { CalendarShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/CalendarShowcase'
import { RadioGroupShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/RadioGroupShowcase'
import { ToggleShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/ToggleShowcase'
import { ToggleGroupShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/ToggleGroupShowcase'
import { InputOTPShowcase } from './DesignSystemComponentsPage/ui-component-showcases/forms/InputOTPShowcase'

// Data Display showcases
import { CardShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/CardShowcase'
import { TableShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/TableShowcase'
import { CarouselShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/CarouselShowcase'
import { AccordionShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/AccordionShowcase'
import { ChartShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/ChartShowcase'
import { EmptyShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/EmptyShowcase'
import { CollapsibleShowcase } from './DesignSystemComponentsPage/ui-component-showcases/data-display/CollapsibleShowcase'

// Overlays showcases
import { AlertShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/AlertShowcase'
import { AlertDialogShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/AlertDialogShowcase'
import { DialogShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/DialogShowcase'
import { SheetShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/SheetShowcase'
import { DrawerShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/DrawerShowcase'
import { PopoverShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/PopoverShowcase'
import { TooltipShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/TooltipShowcase'
import { HoverCardShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/HoverCardShowcase'
import { ContextMenuShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/ContextMenuShowcase'
import { DropdownMenuShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/DropdownMenuShowcase'
import { ProgressShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/ProgressShowcase'
import { SonnerShowcase } from './DesignSystemComponentsPage/ui-component-showcases/overlays/SonnerShowcase'

// Navigation showcases
import { TabsShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/TabsShowcase'
import { BreadcrumbShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/BreadcrumbShowcase'
import { SidebarShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/SidebarShowcase'
import { MenubarShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/MenubarShowcase'
import { NavigationMenuShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/NavigationMenuShowcase'
import { CommandShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/CommandShowcase'
import { ResizableShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/ResizableShowcase'
import { PaginationShowcase } from './DesignSystemComponentsPage/ui-component-showcases/navigation/PaginationShowcase'
import { RouteConfig } from '../infra/router/routeRegistry'
import { state } from 'ccstate'

const componentType$ = state<'basic' | 'business'>('basic')

export const designSystemComponentsPageState = {
  componentType$
}

export function DesignSystemComponentsPage() {
  const componentType = useGet(designSystemComponentsPageState.componentType$)
  const setComponentType = useSet(designSystemComponentsPageState.componentType$)

  return (
    <div className="min-h-screen bg-background font-default">
      {/* Header - Fixed pixel sizes to prevent theme-induced resizing */}
      <header className="h-[100px] border-b border-border bg-card/50 text-card-foreground backdrop-blur-sm sticky top-0 z-50 pt-[var(--safe-area-inset-top)]">
        <div className="container mx-auto px-[32px] py-[16px] h-full">
          <div className="flex items-center justify-between h-full">
            <h1 className="text-[30px] leading-[36px] font-bold text-foreground italic">Design System - Components</h1>
            
            <div className="flex items-center gap-[12px]">
              {/* Basic / Business Toggle */}
              <ToggleGroup
                type="single"
                value={componentType}
                onValueChange={(value) => value && setComponentType(value as 'basic' | 'business')}
                className="bg-muted p-[4px] rounded-lg"
              >
                <ToggleGroupItem value="basic" className="px-[16px] py-[6px] text-[14px] font-medium">
                  Basic
                </ToggleGroupItem>
                <ToggleGroupItem value="business" className="px-[16px] py-[6px] text-[14px] font-medium">
                  Business
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {componentType === 'basic' ? (
          <Tabs defaultValue="foundation" className="w-full">
            {/* Category Tabs */}
            <TabsList className="mb-6">
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="data-display">Data Display</TabsTrigger>
              <TabsTrigger value="overlays">Overlays</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
            </TabsList>

            {/* Foundation Tab */}
            <TabsContent value="foundation" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ComponentCard title="Icon">
                  <IconShowcase />
                </ComponentCard>
              
                <ComponentCard title="Button">
                  <ButtonShowcase />
                </ComponentCard>
              
                <ComponentCard title="ButtonGroup">
                  <ButtonGroupShowcase />
                </ComponentCard>
              
                <ComponentCard title="Badge">
                  <BadgeShowcase />
                </ComponentCard>
              
                <ComponentCard title="Avatar">
                  <AvatarShowcase />
                </ComponentCard>
              
                <ComponentCard title="Kbd">
                  <KbdShowcase />
                </ComponentCard>
              
                <ComponentCard title="Spinner">
                  <SpinnerShowcase />
                </ComponentCard>
              
                <ComponentCard title="Skeleton">
                  <SkeletonShowcase />
                </ComponentCard>
              </div>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ComponentCard title="Label">
                  <LabelShowcase />
                </ComponentCard>
              
                <ComponentCard title="Input">
                  <InputShowcase />
                </ComponentCard>
              
                <ComponentCard title="Textarea">
                  <TextareaShowcase />
                </ComponentCard>
              
                <ComponentCard title="Checkbox">
                  <CheckboxShowcase />
                </ComponentCard>
              
                <ComponentCard title="Switch">
                  <SwitchShowcase />
                </ComponentCard>
              
                <ComponentCard title="Select">
                  <SelectShowcase />
                </ComponentCard>
              
                <ComponentCard title="NativeSelect">
                  <NativeSelectShowcase />
                </ComponentCard>
              
                <ComponentCard title="Slider">
                  <SliderShowcase />
                </ComponentCard>
              
                <ComponentCard title="Calendar">
                  <CalendarShowcase />
                </ComponentCard>
              
                <ComponentCard title="RadioGroup">
                  <RadioGroupShowcase />
                </ComponentCard>
              
                <ComponentCard title="Toggle">
                  <ToggleShowcase />
                </ComponentCard>
              
                <ComponentCard title="ToggleGroup">
                  <ToggleGroupShowcase />
                </ComponentCard>
              
                <ComponentCard title="InputOTP">
                  <InputOTPShowcase />
                </ComponentCard>
              </div>
            </TabsContent>

            {/* Data Display Tab */}
            <TabsContent value="data-display" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ComponentCard title="Card">
                  <CardShowcase />
                </ComponentCard>
              
                <ComponentCard title="Table">
                  <TableShowcase />
                </ComponentCard>
              
                <ComponentCard title="Carousel">
                  <div className="w-full mx-4 my-3">
                    <CarouselShowcase />
                  </div>
                </ComponentCard>
              
                <ComponentCard title="Accordion">
                  <AccordionShowcase />
                </ComponentCard>
              
                <ComponentCard title="Chart">
                  <ChartShowcase />
                </ComponentCard>
              
                <ComponentCard title="Empty">
                  <EmptyShowcase />
                </ComponentCard>
              
                <ComponentCard title="Collapsible">
                  <CollapsibleShowcase />
                </ComponentCard>
              </div>
            </TabsContent>

            {/* Overlays Tab */}
            <TabsContent value="overlays" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ComponentCard title="Alert">
                  <AlertShowcase />
                </ComponentCard>
              
                <ComponentCard title="AlertDialog">
                  <AlertDialogShowcase />
                </ComponentCard>
              
                <ComponentCard title="Dialog">
                  <DialogShowcase />
                </ComponentCard>
              
                <ComponentCard title="Sheet">
                  <SheetShowcase />
                </ComponentCard>
              
                <ComponentCard title="Drawer">
                  <DrawerShowcase />
                </ComponentCard>
              
                <ComponentCard title="Popover">
                  <PopoverShowcase />
                </ComponentCard>
              
                <ComponentCard title="Tooltip">
                  <TooltipShowcase />
                </ComponentCard>
              
                <ComponentCard title="HoverCard">
                  <HoverCardShowcase />
                </ComponentCard>
              
                <ComponentCard title="ContextMenu">
                  <ContextMenuShowcase />
                </ComponentCard>
              
                <ComponentCard title="DropdownMenu">
                  <DropdownMenuShowcase />
                </ComponentCard>
              
                <ComponentCard title="Progress">
                  <ProgressShowcase />
                </ComponentCard>
              
                <ComponentCard title="Sonner">
                  <SonnerShowcase />
                </ComponentCard>
              </div>
            </TabsContent>

            {/* Navigation Tab */}
            <TabsContent value="navigation" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ComponentCard title="Tabs">
                  <TabsShowcase />
                </ComponentCard>
              
                <ComponentCard title="Breadcrumb">
                  <BreadcrumbShowcase />
                </ComponentCard>
              
                <ComponentCard title="Sidebar">
                  <SidebarShowcase />
                </ComponentCard>
              
                <ComponentCard title="Menubar">
                  <MenubarShowcase />
                </ComponentCard>
              
                <ComponentCard title="NavigationMenu">
                  <NavigationMenuShowcase />
                </ComponentCard>
              
                <ComponentCard title="Command">
                  <CommandShowcase />
                </ComponentCard>
              
                <ComponentCard title="Resizable">
                  <ResizableShowcase />
                </ComponentCard>
              
                <ComponentCard title="Pagination">
                  <PaginationShowcase />
                </ComponentCard>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="flex items-center justify-center min-h-[400px]">
            <Empty>
              <EmptyHeader>
                <EmptyDescription>No business components yet</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        )}
      </main>
    </div>
  )
}

export const DesignSystemComponentsRoute: RouteConfig = {
  path: '/design-system/component',
  viewFactory: () => <DesignSystemComponentsPage />
}