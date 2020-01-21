import {useState, useReducer} from 'react';

export const initialState = [
 {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
 },
 {
   item: 'Have a good cry after this assignment',
   completed: false,
   id: 983457803458
 },
 {
   item: 'never give up on this assignment',
   completed: true,
   id: 390345
 },

];

export const todoReducer = (state, action) => {
  return state;
};

