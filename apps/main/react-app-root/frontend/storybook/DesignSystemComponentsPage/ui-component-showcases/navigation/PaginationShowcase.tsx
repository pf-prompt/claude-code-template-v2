/**
 * Pagination Showcase
 * Pagination: basic, with page numbers, with size selector
 */

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../../../../ui-components/Pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui-components/Select'

export function PaginationShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Basic */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Basic</div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="text-foreground" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-foreground">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="text-foreground">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-foreground">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="text-foreground" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      {/* With Page Numbers & Ellipsis */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">With Page Numbers</div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="text-foreground" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-foreground">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="text-foreground">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-foreground">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="text-foreground" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      {/* With Size Selector */}
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">With Size Selector</div>
        <div className="flex items-center gap-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="text-foreground" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="text-foreground">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="text-foreground" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Per page:</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-16 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

