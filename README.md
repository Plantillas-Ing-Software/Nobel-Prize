# Nobel Data Explorer

## Project Overview

**Nobel Data Explorer** is a web application developed as part of a project led by researcher Alex Johansson. The goal of this platform is to provide easy access to historical and current information about Nobel Prize winners (laureates) in various categories such as Peace, Physics, Chemistry, Medicine, Literature, and Economics.

The application consumes data from an open API that provides detailed information about laureates, including their name, country of origin, category, and the year they were awarded.

## Features

- **Toolbar**: Displays a title "Nobel Data Explorer" at the top of the home page.
- **List of Laureates**: Below the toolbar, the application presents a list of laureates in the form of cards. Each card contains the following information:
  - ID
  - First Name
  - Surname
  - Date of Birth
  - Gender
  - Number of Prizes
- **Footer**: The footer at the bottom of the laureate list contains two lines of text:
  - "Copyright © 2024 Nobel Data Explorer. All rights reserved."
  - "Developed by" followed by your name and developer code.
- **Internationalization (i18n)**: The application supports two languages, English (default) and Spanish. Translatable content includes card labels, footer text, and toolbar text.

## Using the Nobel Prize API

This web application retrieves laureate data from the **Nobel Prize API**. The API endpoint used to obtain laureate information is as follows:

### API Endpoint

```http
http://api.nobelprize.org/v1/laureate.json?bornDate=1900
