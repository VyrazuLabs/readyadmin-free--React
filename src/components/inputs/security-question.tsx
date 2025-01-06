import type {
  SelectChangeEvent} from '@mui/material';

import React, { useState } from 'react';

import {
  Stack,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput
} from '@mui/material';

import { _questions } from 'src/_mock';

interface Question {
  id: number;
  question: string;
}

const SecurityQuestion = () => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [answer, setAnswer] = useState<string | undefined>();

  const handleQuestionChange = (event: SelectChangeEvent<typeof question>) => {
    const {
      target: { value },
    } = event;
    setQuestion(() => _questions?.find((item) => item?.question === value));
    setAnswer('');
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <Stack gap={1}>
      <div>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Security Question</InputLabel>
          <Select
            fullWidth
            value={question || ''}
            onChange={handleQuestionChange}
            input={<OutlinedInput label="Security question" />}
            renderValue={() => question?.question}
          >
            {_questions.map((item) => (
              <MenuItem value={item.question} key={item.id}>
                {item.question}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {question && (
        <TextField
          label="Security Answer"
          fullWidth
          value={answer || ''}
          onChange={handleAnswerChange}
        />
      )}
    </Stack>
  );
};

export default SecurityQuestion;
