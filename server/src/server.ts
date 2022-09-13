//const express = require('express');

import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: '1 ad' },
        { id: 2, name: '2 ad' },
        { id: 3, name: '3 ad' },
        { id: 4, name: '4 ad' }
    ]);
});

app.listen(3000);