## Getting Started

In the root directory of the project...

1. Install node modules `yarn install`.
2. Start development server `yarn start`.

## Style guides

- Indentation should be 2 spaces.
- Naming conventions:
  - Folder names will be all lowercase
  - Component files will be Pascal case (capitalized and camel cased after)
  - CSS files will have the same name as the Component they ae applied to.
    - An easy way to keep styles from clashing is to create CSS modules by adding the word module like so: `ThisComponent.module.css`
- No ghost tags please. Use React Fragment components.
- If you're only going to use a variable once: consider using the code directly in place **or** declare a constant instead.
- Be consistent with the indentation and spacing (No extra new lines. One can be added for clarity between different functions.)
- Remove all _logs to the console_ once the code works.
- Remove commented out code.
