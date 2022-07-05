export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "2c6f0a867ac5458794f70388fe2f61b8";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
     .substring(1)
     .split('&')
     .reduce((acc, curr) => {
        let parts = curr.split('=');
        acc[parts[0]] = decodeURIComponent(parts[1])

        return acc;
     },{})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
