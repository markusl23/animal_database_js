
# Animal Database JS

This project is a small web application that displays a list of animals and shows detailed information about each of them in a modal window. It uses vanilla JavaScript, Bootstrap 5 for styling and modals, and implements a skeleton loading animation for images. It is deployed here: https://worldwide-impact.org/animal_database_bootstrapped/index.html

## Features

- Fetches a list of animals from an external resource (https://worldwide-impact.org/animal_data_api/animal_data.json).
- Generates a dynamic animal overview with clickable buttons.
- Loads detailed animal information (habitat, weight, food type, image).
- Uses Bootstrap modals for accessible, keyboard‑friendly dialogs.
- Implements a skeleton loading screen while animal images load.
- Displays loading messages during data fetch operations.
- Fully responsive layout using Bootstrap grid.

## Technologies Used

- **JavaScript (ES6)**  
- **Bootstrap 5.3**  
- **HTML5 & CSS3**  
- **ESLint** (SublimeLinter + local config)  
- **Fetch API** with polyfills for compatibility  

## How It Works

1. **loadAnimalList()** fetches all animal names and API URLs.  
2. **fillAnimalOverview()** dynamically creates buttons for each animal.  
3. When a button is clicked, **loadAnimalDetails()** fetches detailed data.  
4. **showModal()** constructs a Bootstrap modal and injects:
   - a UL with details  
   - a skeleton placeholder  
   - the image (which replaces the skeleton once loaded)  
5. The modal appears using `bootstrap.Modal`.

## Example Code Snippet

```js
let skeleton = document.createElement('div');
skeleton.classList.add('skeleton');
bodyElement.appendChild(skeleton);

img.onload = () => {
  skeleton.replaceWith(img);
};
```

## Accessibility

- ARIA labels for buttons  
- Bootstrap modal (`role="dialog"`, keyboard‑friendly)  
- Screen reader‑friendly text hierarchy  
- Image alt‑descriptions  

## Installation & Usage

1. Clone the repository:
   ```
   git clone https://github.com/markusl23/animal-database-js.git
   ```
2. Open `index.html` in a browser.
3. Ensure the external resource https://worldwide-impact.org/animal_data_api/animal_data.json is accessible.
4. (Optional) If using ESLint:
   ```
   npm install
   npx eslint js/src/scripts.js
   ```

## Future Improvements

- Add search or filter functionality  
- Refactor into modules or a framework  
- Add automated tests  
- Improve skeleton transitions  

## License

MIT License.
