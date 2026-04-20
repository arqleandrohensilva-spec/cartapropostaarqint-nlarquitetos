import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditableProps {
  id: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
  multiline?: boolean;
  ariaLabel?: string;
}

const STORAGE_KEY = "nl-carta-proposta-content";

const loadStore = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const saveStore = (id: string, html: string) => {
  const store = loadStore();
  store[id] = html;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

export const clearAllEdits = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};

/**
 * Inline-editable element. Click to edit. Persists to localStorage.
 */
const Editable = ({
  id,
  as: Tag = "div",
  className,
  children,
  multiline = false,
  ariaLabel,
}: EditableProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const stored = loadStore()[id];
    if (stored !== undefined && ref.current.innerHTML !== stored) {
      ref.current.innerHTML = stored;
    }
  }, [id]);

  return (
    <Tag
      ref={ref as never}
      data-editable
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-label={ariaLabel || `Editar ${id}`}
      onBlur={(e: React.FocusEvent<HTMLElement>) => saveStore(id, e.currentTarget.innerHTML)}
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
      }}
      className={cn("transition-colors duration-200 outline-none", className)}
    >
      {children}
    </Tag>
  );
};

export default Editable;
