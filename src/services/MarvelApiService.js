import React from 'react';
import axios from 'axios';
import secrets from '../configs/secrets'

const baseHost = 'https://gateway.marvel.com'

export const getCharacters = async (characterName) => {
  try {
    const headers = {
      "Referer": "https://developer.marvel.com/",
    };

    const response = await axios.get(
      `${baseHost}/v1/public/characters?nameStartsWith=${characterName}&apikey=${secrets.marvelApiKey}&limit=10`,
      { headers },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
