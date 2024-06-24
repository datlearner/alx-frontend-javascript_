export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      /* eslint-disable no-unused-vars */
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }