# JavaScript and Leaflet - Challenge 15
## Part 1 - Visualisation of Earthquakes
### Background
The United States Geological Survey (USGS) provides scientific data about natural hazards, the health of our ecosystems and environment, and climate and land-use change impacts.
The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world every day but lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualise USGS data that will allow them to educate the public and other government organisations 
This challenge is in two parts. Part-1 asks us to create an earthquake visualisation, while Part-2 asks us to Gather and Pole More Data, and is optional, with no additional points.
### Project Activities
>  I reviewed the USGS GeoJSON Feed Links to an external site URL and reviewed the dataset "All Earthquakes from the Past 7 days", and used the URL of this JSON to pull in the data for the visualisation.
>  I used Leaflet, to create a map that plots all the earthquakes from this dataset based on their longitude and latitude.
>  I created data markers to reflect the magnitude of each earthquake by its size, and depth by its colour.
>  I prepared popups for each earthquake providing information about the earthquake.
>  I created a legend showing the relationship between colour and depth range for each earthquake.
### Requirements Met
I created a map meeting all the requirements, showing that:
  > The TileLayer loads without error,
  > Connects to geojson API using D3 without error
  > Markers with size corresponding to earthquake magnitude
  > A legend showing the depth and their corresponding colour
I created data points with all the requirements, showing that:
  >  Data points scale with magnitude level, 
  >  Data points' colours change with depth level,
  >Each point has a tooltip with the Magnitude, the location and depth, and
  >	All data points load in the correct locations.
![image](https://github.com/JerryJaye/leaflet-Challenge-15/assets/144417761/a4910f84-8dd5-43c7-84cf-6c29258c2100)

### Visualisation of all Earthquakes during the last 7 days.

## Part 2 - Gather and Plot More Data - Tectonic Plates

## Part 1 - Visualisation of Earthquakes
### Background
Part 2 of this Challenge was optional and did not score any points. 
I found the URL to the Tectonic Plates data store in geoJSON on GitHub by the author. I wrote the code to download and access the data and display it. The result is shown below.

![image](https://github.com/JerryJaye/leaflet-Challenge-15/assets/144417761/3010a066-1daa-472f-a1ec-0c75218f6400)

### Visualisation of the tectonic plates, showing the visual relationship between earthquakes and tectonic boundaries.

## References
What is GeoJSDON, How to use, what is the importance of GeoJSON? - YouTube

Tutorial- How to create a GeoHSON file using geojson.io - YouTube

Gogson.io Tutorial - YouTube.

Leaflet API Reference - Leafletjs.com

GeoJSON Documentation - geojson.readthedocs.io/en/latest/

GitHub - Various pages

Chat GPT 
