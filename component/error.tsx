"use client"
import { notification } from "antd";

interface ErrorProps {
  message?: string;
}

function Error({
  message = `There's no Data Fetching`,

}: ErrorProps) {
  
  notification.error({
    message,
    placement: 'topRight',
    duration: 4.5, 
  });

  return null; 
}

export default Error;
