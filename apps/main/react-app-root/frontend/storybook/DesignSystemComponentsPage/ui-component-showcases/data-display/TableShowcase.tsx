/**
 * Table Showcase
 * Table: basic table, striped, with selection, sortable
 */

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../ui-components/Table'
import { Checkbox } from '../../../../ui-components/Checkbox'

export function TableShowcase() {
  return (
    <div className="w-full space-y-4">
      {/* Basic Table */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">Basic</div>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs text-muted-foreground">Name</TableHead>
                <TableHead className="text-xs text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs text-foreground">Item 1</TableCell>
                <TableCell className="text-xs text-foreground">Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs text-foreground">Item 2</TableCell>
                <TableCell className="text-xs text-foreground">Inactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* With Selection */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground">With Selection</div>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead className="text-xs text-muted-foreground">Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="text-xs text-foreground">Item A</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

