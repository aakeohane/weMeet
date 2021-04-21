# weMeet
The objective of this app is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## **Feature 2:**
As a user, I should be able to expand and collapse details for an event so that I can see extra information about an event id like to know more about.

- _Scenario 1: An event element is collapsed by default_  
 **Given** user hasn’t opened/clicked for further details about each event shown  
    **When** the user opens the app to see list of events with basic information  
    **Then** the user can see all events without extraneous information in the viewport
- _Scenario 2: User can expand an event to see its details_  
   **Given** user sees list of events  
    **When** the user clicks on expand button  
    **Then** the user can see more details about a certain event
- _Scenario 3: User can collapse an event to hide its details_  
   **Given** user opened further details about event  
    **When** user must click the collapse button  
    **Then** the user can see a list of events without the expanded details open

## **Feature 3:**
As a user, I should be able to filter the number of events I see on the page so that I am not overwhelmed by a large amount of options.

- _Scenario 1: When a user hasn’t specified a number, 32 is the default number_   
	 **Given** user hasn’t specified number of events to show  
    **When** the user opens up the app  
    **Then** the user should see list of 32 events
- _Scenario 2: User can change the number of events they want to see_
  **Given** user wants to change number of events shown  
    **When** user uses filter to change number of events shown  
    **Then** the user will see the number of events that they chose to filter list by
    
## **Feature 4:**
As a user, I should be able to find some information about an event without and internet connection so that the app can still be used at a limited capacity without replying on network capabilities.

- _Scenario 1: Show cached data when there's no internet connection_   
   **Given** user wants to use app without internet  
    **When** user opens app  
    **Then** user should only see info based on the cached data from last network connection
- _Scenario 2: Show error when user changes the settings (city, time range)_
   **Given** user wants to change the settings without Internet connection  
    **When** user submits changes to the filter settings of the city and time range  
    **Then** user will get error message

## **Feature 5:**
As a user, I should be able to look at data in a chart or visual format so that I can understand it in a more accessible way.

- _Scenario 1: Show a chart with the number of upcoming events in each city_   
  **Given** user wants to see upcoming events in each city through a visual  
    **When** user clicks on upcoming events in each city button  
    **Then** user sees a chart with the upcoming events in each city
