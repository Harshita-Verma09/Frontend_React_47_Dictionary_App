# Dictionary App

This is a simple dictionary application built using React that allows users to search for the definition of English words. It fetches data from the Free Dictionary API.

## Features

- **Word Search:** Enter any English word to find its definition.
- **Definition Display:** Shows the searched word and its first available definition.
- **Error Handling:** Displays "No result found" if the word is not in the dictionary.
- **Clean and Responsive UI:** Utilizes Tailwind CSS for styling, providing a dark theme and a centered layout.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **Free Dictionary API:** A free API used to fetch word definitions.

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
Install dependencies:

Bash

npm install
# or
yarn install
Start the development server:

Bash

npm start
# or
yarn start
This will run the app in the development mode. Open http://localhost:3000 1  to view it in your browser.   
1.
github.com
github.com

# Usage
Enter a word in the input field.
The application will automatically fetch and display the definition (if found).
If no definition is found, a "No result found" message will be displayed.
API Endpoint
The application uses the following API endpoint:

https://api.dictionaryapi.dev/api/v2/entries/en/{word}

where {word} is the word being searched.
