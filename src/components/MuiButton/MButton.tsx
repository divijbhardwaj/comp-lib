import React from 'react';
import Button from '@mui/material/Button';

export interface ButtonProps {
  label: String
}

export default function (props: ButtonProps) {
  return <Button variant="contained">{props.label}</Button>;
};