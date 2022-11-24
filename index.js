		const express=require("express")
		const app=express();
		const cors=require("cors")
		const bodyParser=require("body-parser")
		const port=4700;

		app.use(bodyParser.urlencoded({
			extended:true
		}))
		app.use(bodyParser.json())

		app.use(cors())
		app.get("/",(req,res)=>{
			res.send("gondu jathi")

		})
		app.post("/newData",(req,res)=>{
			//console.log(req.body)
			const {name,pin}=req.body
			console.log(name,pin,"values")
			res.send("Data Added")

		})
		app.listen(port)
		console.log("aadavi manishini thalli artham kala")