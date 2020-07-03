# Coronavirus Bixby Capsule
 ## Revision ID : 2020-185-17314
 - Bixby capsule to return coronavirus statistics globally and by country.
 - API endpoint : `https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#intro`

# Requirements
 - Bixby enabled device.
 - Developer option in Bixby settings, enable on-device testing. 

# Set up
 1. Once on-device testing is enabled through Bixby settings.
   - Go to Bixby voice setting
   - About Bixby voice
   - Tap on version number until `developer option enabled` notice appears
 2. Developer options
   - On-device tesing
   - Insert revision ID to testing.

# NL utterance
 ## Version 1.0.8
  ### Global
      - Show me the global virus statistics
  ### By country
    - Show me the South Korea statistics
    - Show me the United Kingdom statistics
    - Show me the United States statistics
    - Show me the US statistics
    - Show me the Portugal statistics
 ## Capsule screenshot - Global query response
 <img src="playground.covid19/screenshots/version1.jpg" alt="Screenshot" width="350"/>
 
 ## Capsule screenshot - By country query response
 <img src="playground.covid19/screenshots/version2.jpg" alt="Screenshot" width="350"/>

# Current workings
 - Add error handlers
 - Update voice UI for conversational statistics

# Future Implementations
 - Implement additional queries
    - `How many cases are there near me?`
    - `Which country had the most cases?`
    - `Update me on the virus`
 - Integrate visual map/representation of statistical model

# Resources
 - Capsule icon: https://www.flaticon.com/free-icon/patient_2750657?term=covid&page=1&position=20 
