import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Botanical } from './Botanical';

export function ImageBox({ kind = 'flowers' }: { kind?: string }) {
  const [file, setFile] = useState<{ name: string; url: string } | null>(null);

  // Release object URLs when replaced / unmounted.
  useEffect(() => () => { if (file) URL.revokeObjectURL(file.url); }, [file]);

  const selectFile = (picked?: File) => {
    if (picked?.type.startsWith('image/')) setFile({ name: picked.name, url: URL.createObjectURL(picked) });
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        selectFile(e.dataTransfer.files[0]);
      }}
      className='flex min-h-[112px] items-center gap-4 border border-dashed border-[var(--border)] bg-[var(--ivory)] p-3 hover:border-[var(--forest)]'
    >
      {file ? (
        <img src={file.url} alt={`Local preview: ${file.name}`} className='h-[72px] w-[72px] object-cover' />
      ) : (
        <Botanical kind={kind} large />
      )}
      <div className='min-w-0 flex-1'>
        <span className='block truncate text-xs font-semibold'>{file?.name ?? 'Drop an image here, or browse'}</span>
        <span className='mt-1 block text-[10px] text-[var(--muted-foreground)]'>PNG, JPG up to 5 MB · local preview only</span>
        <label className='mt-2 inline-flex cursor-pointer text-[10px] font-semibold text-[var(--forest)]'>
          {file ? 'Replace image' : 'Browse files'}
          <input type='file' accept='image/*' className='sr-only' onChange={(e) => selectFile(e.target.files?.[0])} />
        </label>
      </div>
      {file && (
        <button type='button' onClick={() => setFile(null)} className='btn btn-secondary !min-h-8 !px-2 text-[10px]'>
          <X size={13} /> Remove
        </button>
      )}
    </div>
  );
}
