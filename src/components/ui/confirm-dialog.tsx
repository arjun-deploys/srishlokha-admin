import { useState, type ReactNode } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ConfirmDialogProps = {
  title: string;
  description: string;
  confirmLabel?: string;
  triggerClassName?: string;
  triggerAriaLabel?: string;
  onConfirm: () => void;
  children: ReactNode;
};

export function ConfirmDialog({
  title,
  description,
  confirmLabel = 'Confirm',
  triggerClassName,
  triggerAriaLabel,
  onConfirm,
  children,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger aria-label={triggerAriaLabel} className={cn('btn btn-danger', triggerClassName)}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[90] bg-[oklch(20%_.02_65/.42)]" />
        <Dialog.Viewport className="fixed inset-0 z-[91] flex items-center justify-center overflow-y-auto p-4">
          <Dialog.Popup className="w-full max-w-[420px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-xl">
            <Dialog.Title className="serif text-2xl text-[var(--forest-deep)]">
              {title}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
              {description}
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close className="btn btn-secondary">Cancel</Dialog.Close>
              <Button
                variant="danger"
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
              >
                {confirmLabel}
              </Button>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
