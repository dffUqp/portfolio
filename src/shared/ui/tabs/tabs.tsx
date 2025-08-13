import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from 'shared/lib';

type TabsItem = {
  key: string;
  label: string;
  children: ReactNode;
  icon?: ReactNode;
};

interface TabsProps {
  items: TabsItem[];
  onChange?: (key: string) => void;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ items, onChange }, ref) => {
    const tabListRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const activeTabElementRef = useRef<HTMLButtonElement | null>(null);

    const [selectedKey, setSelectedKey] = useState(items[0].key);

    const focusTab = (tab: HTMLElement) => {
      setTimeout(() => tab.focus());
    };

    const moveFocusToTab = (tabs: HTMLElement[], index: number) => {
      const lastTabIndex = tabs.length - 1;

      if (!tabs[index] && index > lastTabIndex) {
        focusTab(tabs[0]);
        return;
      }

      if (!tabs[index] && index < 0) {
        focusTab(tabs[lastTabIndex]);
        return;
      }

      if (tabs[index]) {
        focusTab(tabs[index]);
      }
    };

    useEffect(() => {
      const container = containerRef.current;
      const activeTab = activeTabElementRef.current;
      if (!container || !activeTab) return;

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();

      const clipLeftPercent =
        ((activeRect.left - containerRect.left) / containerRect.width) * 100;
      const clipRightPercent =
        100 -
        ((activeRect.right - containerRect.left) / containerRect.width) * 100;

      container.style.clipPath = `inset(0 ${clipRightPercent}% 0 ${clipLeftPercent}%)`;
    }, [selectedKey]);

    return (
      <div
        ref={ref}
        className="w-full border border-gray-500 rounded-xl overflow-hidden relative"
      >
        <div
          role="tablist"
          ref={tabListRef}
          className="w-full flex border-b border-gray-500"
        >
          {items.map((item, index) => {
            const isLast = items.length - 1 === index;
            const isSelected = selectedKey === item.key;

            return (
              <button
                ref={selectedKey === item.key ? activeTabElementRef : null}
                className={cn('w-full cursor-pointer p-2 text-gray-400', {
                  'border-r border-gray-500': !isLast,
                })}
                key={item.label}
                role="tab"
                type="button"
                id={`${item.key}-trigger`}
                aria-controls={`${item.key}-content`}
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                onKeyDown={event => {
                  if (!tabListRef.current) return;

                  const focusCandidates = [
                    ...tabListRef.current.children,
                  ] as HTMLElement[];

                  switch (event.key) {
                    case 'ArrowLeft':
                      moveFocusToTab(focusCandidates, index - 1);
                      break;

                    case 'ArrowRight':
                      moveFocusToTab(focusCandidates, index + 1);
                      break;

                    case 'Home':
                      moveFocusToTab(focusCandidates, 0);
                      break;

                    case 'End':
                      moveFocusToTab(
                        focusCandidates,
                        focusCandidates.length - 1,
                      );
                      break;

                    default:
                      break;
                  }
                }}
                onClick={() => {
                  setSelectedKey(item.key);
                  onChange?.(item.key);
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          aria-hidden
          ref={containerRef}
          className="absolute top-0 w-full flex border-b border-gray-500 transition-[clip_path] duration-[0.25s]"
        >
          {items.map((item, index) => {
            const isLast = items.length - 1 === index;

            return (
              <button
                type="button"
                tabIndex={-1}
                className={cn(
                  'w-full cursor-pointer p-2 text-white bg-gray-300/40 pointer-events-none',
                  {
                    'border-r border-gray-500': !isLast,
                  },
                )}
                key={item.label}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {items.map(item => (
          <div
            key={item.key}
            tabIndex={0}
            role="tabpanel"
            className="p-4"
            id={`${item.key}-content`}
            aria-labelledby={`${item.key}-trigger`}
            hidden={selectedKey !== item.key}
          >
            {selectedKey === item.key ? item.children : null}
          </div>
        ))}
      </div>
    );
  },
);

export { Tabs };
export type { TabsProps };
