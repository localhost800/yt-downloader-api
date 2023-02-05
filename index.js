import express from 'express';
import ytdl from 'ytdl-core';
import cors from 'cors';
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.get("/", (req, res)=>{
	res.send("Helloooo from Linux!");
});
app.post("/download", (req, res)=>{
	const url = req.body.url;
	const date = Date.now();
	res.header("Content-Disposition", `attachment; filename="linkit_aud_${date}.mp3"`);
	return ytdl(url, {filter: 'audioonly', format: 'mp3'}).pipe(res);
});
app.listen(3000, ()=>{
	console.log("Server listening on port", 3000);
});
