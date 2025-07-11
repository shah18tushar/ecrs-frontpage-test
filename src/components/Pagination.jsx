// components/ui/pagination.tsx
'use client';

import * as React from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {Button} from './ui/button';
import {cn} from '@/lib/utils';

/**
 * @param {Object} props
 * @param {number} props.currentPage
 * @param {number} props.totalPages
 * @param {(page: number) => void} props.onPageChange
 * @param {string} [props.className]
 */
export function Pagination({currentPage, totalPages, onPageChange, className}) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className={cn ('flex items-center justify-between', className)}>
      <div className="flex-1 flex justify-between sm:hidden">
        <Button
          variant="outline"
          onClick={() => canGoPrev && onPageChange (currentPage - 1)}
          disabled={!canGoPrev}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => canGoNext && onPageChange (currentPage + 1)}
          disabled={!canGoNext}
        >
          Next
        </Button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Button
              variant="outline"
              className="rounded-r-none"
              onClick={() => canGoPrev && onPageChange (currentPage - 1)}
              disabled={!canGoPrev}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from ({length: totalPages}, (_, i) => i + 1).map (page => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                className={cn (
                  'rounded-none border-l-0',
                  page === 1 && 'border-l',
                  currentPage === page && 'bg-gray-900 text-white'
                )}
                onClick={() => onPageChange (page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              className="rounded-l-none"
              onClick={() => canGoNext && onPageChange (currentPage + 1)}
              disabled={!canGoNext}
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
