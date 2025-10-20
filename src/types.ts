// This is a simplified, unofficial representation for educational purposes.
// Do not rely on this in production code.

export interface Fiber {
  // --- Core Identity ---
  /** Identifies the type of component (e.g., FunctionComponent, ClassComponent, HostComponent) */
  tag: number;
  /** The `key` prop provided by the user */
  key: null | string;
  /** The component function, class, or DOM tag name (e.g., 'div') */
  type: any;

  // --- Tree Structure ---
  /** Pointer to the parent Fiber node */
  return: Fiber | null;
  /** Pointer to the first child Fiber node */
  child: Fiber | null;
  /** Pointer to the next sibling Fiber node */
  sibling: Fiber | null;

  // --- State and Props ---
  /** The props that were used to create the output of this fiber */
  memoizedProps: any;
  /** The state that was used to create the output of this fiber (e.g., a linked list of hooks) */
  memoizedState: any;
  /** A queue of state updates, callbacks, and effects */
  updateQueue: any;
  /** The props that are waiting to be processed */
  pendingProps: any;

  // --- Internals ---
  /** A reference to the local component instance (DOM node, class instance) */
  stateNode: any;
  /** A bitmask describing what side-effects (e.g., DOM mutations) this fiber has */
  flags: number;
  /** A reference to the fiber's "twin" (the 'current' or 'work-in-progress' node) */
  alternate: Fiber | null;
}
