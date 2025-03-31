# Morphyleadsfinder Chrome Extension

Morphyleadsfinder is a Chrome extension designed to help users extract data efficiently using Google Maps and other tools. This extension is ideal for lead generation and data extraction tasks.

## Features

- Extract data from Google Maps based on keywords and locations.
- Context menu integration for quick access.
- Popup interface for user-friendly interaction.
- Background scripts for seamless operation.
- Integration with external tools like Boxxer Email Extractor.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click on **Load unpacked** and select the `SELECT-THIS-FOLDER-IN-CHROME` directory.

## Usage Instructions

1. **Location Input**: Do not enter the country name in the location text box. Enter only the city name, state name, and country name in the format:
   ```
   CITY NAME, STATE NAME, COUNTRY NAME
   ```
   Example: `Dallas, Texas, USA`.

2. **Search Criteria**: Provide at least 5 keywords and 5 to 10 locations in a single search.

3. **Email Extraction**: Download and install the [Boxxer Email Extractor](https://www.emailextractor.co/boxxeremailextractor.exe) on your Windows PC. This free software allows you to extract unlimited email addresses based on the given keywords and locations.

## File Structure

```
SELECT-THIS-FOLDER-IN-CHROME/
├── manifest.json          # Chrome extension manifest file
├── assets/                # Static assets (CSS, icons, vendors)
├── build/                 # Build files
├── config/                # Configuration files
│   ├── app.js
│   └── box.js
├── controllers/           # Core extension scripts
│   ├── background.js
│   ├── config.js
│   ├── content.js
│   ├── contextMenus.js
│   ├── GoogleForm.js
│   ├── index.js
│   ├── injectedScript.js
│   ├── localModel.js
│   ├── popup.js
│   ├── Tabs.js
│   └── TaskManagerContainer.js
├── libs/                  # External libraries
├── popup/                 # Popup interface files
│   └── views/             # Popup views
```

## Development

1. Make sure you have Node.js installed.
2. Navigate to the project directory and install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm start
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.