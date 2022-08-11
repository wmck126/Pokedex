import React, {useEffect, useState} from 'react';

export default function CreateTrainer() {
  const [trainer, setTrainer] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/trainer")
    .then(r => r.json())
    .then(data =>setTrainer(data))
  }, [])

}