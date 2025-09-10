# Flipping the Script: Movie Popularity Contest! 🎬⭐

You're really getting the hang of this! Now we're going to do something super clever - take the same information from the last exercise and look at it from a completely different angle.

## What mind-blowing thing you'll learn

Remember how in the last exercise we showed "Jane likes Planet Earth"? Now we're going to flip it around and show "Planet Earth is liked by Jane, John, and Sarah!" 

It's like being able to reorganize your entire music collection from "songs by artist" to "artists by genre" with just a few lines of code!

You'll discover how to:
- **Turn data inside-out** - Look at the same information from different perspectives
- **Build smart building blocks** - Create reusable pieces that you can use over and over  
- **Pass information between components** - Like handing notes between different parts of your app
- **Think like a data detective** - Group and organize information in creative ways

## The cool concepts you'll master

*Remember, these will click naturally as you practice - no pressure!*

- **Data transformation**: Like being a data magician who can reorganize information in countless ways
- **Component teamwork**: Making different parts of your app work together (like having specialized workers in a factory)
- **Passing the baton**: Learning how parent components send information to their children
- **Building with building blocks**: Creating reusable pieces that make your code cleaner and easier to understand

## Time to see the magic!

You know the drill by now - and you're getting faster at this:

1. **Get everything ready**:
   ```bash
   npm install
   ```
   *Your trusty setup command!*

2. **Launch your popularity tracker**:
   ```bash
   npm start
   ```
   *Get ready to see data transformation in action!*

3. **Marvel at your creation**: 
   Visit [http://localhost:3000](http://localhost:3000) in your browser

4. **Take a break when ready**: `Ctrl+C` to stop

## The awesome thing you'll witness

When your app loads, you'll see:

- The familiar "ReactND - Coding Practice" header
- A "How Popular is Your Favorite Movie?" section  
- Movies listed with all the people who love them (instead of people listed with their favorite movies)

*See how we took the same data but completely flipped the perspective? That's the power of data transformation!*

## Your exploration adventure 🕵️‍♀️

**🎯 The big picture**: This app takes user-movie relationships and turns them inside-out. Instead of "Jane likes Planet Earth," it shows "Planet Earth is liked by Jane, Bob, and Sarah."

**🔍 Things to investigate in the code**:
- How the app builds a new `usersByMovie` object that groups fans by movie
- How information gets passed from the main app to the `Dashboard` component
- Where the magic happens that transforms "people → movies" into "movies → people"
- How the same movie data gets reused in a totally different way

**💡 Real-world superpower**: This technique is everywhere! Think about:
- Netflix showing "People who liked this movie also liked..."
- Amazon showing "Customers who bought this item also bought..."  
- Spotify creating playlists based on what similar users like

You're learning to think about data relationships in multiple ways - that's a incredibly valuable skill that will serve you well in any programming project!
