const FIRST_FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const queryFirstFocusable = (scope = document) => scope.querySelectorAll(FIRST_FOCUSABLE_SELECTOR)[0];

export default queryFirstFocusable;
