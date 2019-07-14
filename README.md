# Full-Stack-Memory-Game
An API to update the leaderboard of which player finished the memory game the fastest and with the least amount of turns.

### Version
1.0.0

## Usage
```
  npm install
  
  npm start
```

## Endpoints

```
  POST /leaderboard/update_score
  
  GET /leaderboard/time // Return the top 10 fastest people to win the game
  
  GET /leaderboard/turns // Return the top 10 people to win the game using the fewest clicks
```
