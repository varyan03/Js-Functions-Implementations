/**
 * Creates a minimal clone of the React rendering and state management system.
 * This function acts as a module closure to maintain global state across renders.
 * 
 * @returns {Object} An object containing the `render` tool and `useStateClone` hook.
 */
function ReactClone() {
  // The hidden "safe" where state is persisted across component re-renders.
  // In a real React app, this would be an array or linked list to track multiple hooks.
  let state;
 
  /**
   * Simulates the React rendering process by executing a functional component.
   * 
   * @param {Function} component - The functional component to execute.
   * @param {any} props - The properties to pass down to the component.
   * @returns {any} The simulated DOM evaluation or output of the component.
   */
  function render(component, props) {
    return component(props);
  }
 
  /**
   * A minimal implementation of React's useState Hook.
   * 
   * @param {any} initialValue - The initial default state if no state is currently stored.
   * @returns {Array} A tuple containing the current state snapshot and the setter function.
   */
  function useStateClone(initialValue) {
    // If state is uninitialized, assign the initial value.
    // Note: A safer check for production is `state !== undefined ? state : initialValue`
    // to prevent falsy values (like 0 or false) from being unintentionally overridden.
    state = state || initialValue;

    /**
     * Updates the internal state and conceptually schedules a re-render.
     * 
     * @param {any|Function} newVal - The new state value or a callback receiving the previous state.
     */
    function setState(newVal) {
      if (typeof newVal === 'function') {
        // Support functional state updates: setState((prev) => prev + 1)
        state = newVal(state);
      } else {
        // Support direct state updates: setState(5)
        state = newVal;
      }
    }
   
    // Return a static snapshot of the state at this exact moment in time
    return [state, setState];
  }
 
  return {
    render,
    useStateClone,
  };
}

// Initialize our React clone module
const React = ReactClone();
 
/**
 * A sample functional component to demonstrate the useState clone.
 * 
 * @param {number} prop - A sample prop passed into the component.
 * @returns {number} The current state value that would conceptually be rendered.
 */
function MyComponent(prop) {
  // Retrieve the state snapshot and the setter function from our React clone.
  const [value, setValue] = React.useStateClone(0);
  
  // Update the hidden state. 
  // In real React, this triggers a re-render. To avoid infinite loops, 
  // this would typically be placed inside an event handler (onClick) or a useEffect.
  setValue(prop);
  
  // Return the static snapshot we received at the top of the function.
  return value;
}
 
// ==========================================
// Simulating the React Application Lifecycle
// ==========================================

// Run 1: Initializes state to 0, updates secret state to 4. Returns snapshot 0.
console.log("Render 1 Output:", React.render(() => MyComponent(4)));

// Run 2: Retrieves current secret state (4), updates secret state to 5. Returns snapshot 4.
console.log("Render 2 Output:", React.render(() => MyComponent(5)));

// Run 3: Retrieves current secret state (5), updates secret state to 6. Returns snapshot 5.
console.log("Render 3 Output:", React.render(() => MyComponent(6)));
