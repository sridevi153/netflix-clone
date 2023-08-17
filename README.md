#Netflix Clone

A replica of the streaming giant, Netflix, built using React.

##Features
Dynamic fetching of movies from TMDB (The Movie Database).
Display movies in rows categorized by genres.
Carousel of featured movies (Netflix Originals).
Detailed view of movie on click.
Responsive design, optimized for both desktop and mobile views.
User authentication with a custom login page.

##Technologies Used
ReactJS: Frontend framework.
React Router: For routing and navigation.
Axios: To make API requests.
TMDB API: To fetch movie data.

##Installation & Setup

1.Clone the repo:
###git clone https://github.com/sridevi153/netflix-clone.git

2.Move into the newly created directory:
###cd netflix-clone

3.Install the dependencies:
###npm install

4.Start the development server:
###npm start

5.Open your browser and navigate to http://localhost:3000.

##Usage
1.On the landing page, you can see the login page where you need to enter a avalid email format for username and password.
2.after successful login you will be directed to home page which contains the movies carousel, you can Scroll through each row in which movies are displayed based on category to view movies.
3.On click of more button on carousel it will navigate to Movie details page of that particular movie.
4.On click of any movie card in home page will play a trailer of that movie.
5.In navbar navigate to MyList page it navigate to MyList page where a list of movies are displayed.
6.On click of any movie card in myList page it will direct you to Movie Details page of that particular movie.
7.In movie details page there is a banner of that movie poster and a row of movies displaying other movie suggestions.
8.On click of play button in movie Details page it will play trailer of that movie.
9.On click of the Icon on left corner of Navbar application logs out.

##Configuration

Ensure you have NodeJS and NPM installed.
Get your TMDB API key and add it to the project.

##Contributing

Pull requests are welcome. Please make sure to update tests as appropriate.

