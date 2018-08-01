'use strict';
const express     = require('express');
const routerItem  = express.Router();

const Items       = require('./item-module');

routerItem.get('/', (req, res) => {
    res.json({message: 'welcome to netflix api.'});
})

routerItem.get('/items', (req, res) => {
    Items.find((err, items) => {
        if(err){
            res.status(500).json({error: err});
        }else{
           res.status(200).json({items});
        }
    })
});

routerItem.post('/items', (req, res) => {
    console.log(req.body.items)
    Items.create(req.body.items,(err, item)=>{
        if(err){
            res.status(500).json({error: err});
        }else{
            res.status(200).json("created successed");
        }
    })
});

routerItem.put('/add-item/:id', (req, res) => {
    Items.find({'id':req.params.id}, (err, item) => {
        if(err){
            res.status(500).json({error: err});
        }else{
            Items.update({id: req.params.id}, {$set: {group: "mylist"}}, (err, item) => {
                if(err){
                    res.status(500).json({error: err});
                }else{
                    Items.find((err, items) => {
                        if(err){
                            res.status(500).json({error: err});
                        }else{
                           res.status(200).json({items});
                        }
                    }) 
                }
            })
        }
    })
});

routerItem.put('/remove-item/:id', (req, res) => {
    Items.find({id:req.params.id}, (err, item) => {
        console.log(req.params.id)
        console.log(item)
        if(err){
            res.status(500).json({error: err});
        }else{
            Items.update({id: req.params.id}, {$set: {group: "recommendations"}}, (err, item) => {
                if(err){
                    res.status(500).json({error: err});
                }else{
                    console.log("update")
                    Items.find((err, items) => {
                        console.log(items)
                        if(err){
                            res.status(500).json({error: err});
                        }else{
                           res.status(200).json({items});
                        }
                    }) 
                }
            })
        }
    })
});

module.exports = routerItem;4