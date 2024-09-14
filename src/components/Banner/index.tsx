"use client"
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab, Card, CardContent, Button, useMediaQuery, useTheme } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@mui/material";
import CodeEditor from './CodeEditor';

interface SampleCode {
  name: string;
  code: string;
  difficulty: string;
}

const samplePythonCodes: SampleCode[] = [
  {
    name: "Linear Regression",
    code: `
import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

model = LinearRegression()
model.fit(X, y)

print(f"Coefficient: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")
    `,
    difficulty: "Beginner",
  },
  {
    name: "Neural Network",
    code: `
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mse')
    `,
    difficulty: "Intermediate",
  },
  {
    name: "Sentiment Analysis",
    code: `
from transformers import pipeline

sentiment_analyzer = pipeline("sentiment-analysis")

text = "I love learning about artificial intelligence!"
result = sentiment_analyzer(text)[0]

print(f"Sentiment: {result['label']}")
print(f"Confidence: {result['score']:.2f}")
    `,
    difficulty: "Advanced",
  },
];

const Banner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [code, setCode] = useState<string>(samplePythonCodes[0].code);
  const [copied, setCopied] = useState<boolean>(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevIndex) => (prevIndex + 1) % samplePythonCodes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCode(samplePythonCodes[activeTab].code);
  }, [activeTab]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Box component="section" my={2} py={2}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            {/* Conditionally render Typography based on screen size */}
            {isLargeScreen ? (
              <Typography variant="h1" className="display-4 fw-bold mb-3 text-primary">
                Master AI with Python
              </Typography>
            ) : (
              <Typography variant="h2" className="display-4 fw-bold mb-3 text-primary">
                Master AI with Python
              </Typography>
            )}
            <Typography variant="body1" className="lead mb-4">
              Explore cutting-edge AI techniques and boost your Python skills with our comprehensive tutorials and examples.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Start Learning <span aria-hidden="true">&rarr;</span>
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent>
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="AI Python code examples">
                  {samplePythonCodes.map((sample, index) => (
                    <Tab key={index} label={`${sample.name} (${sample.difficulty})`} />
                  ))}
                </Tabs>
                <Box mt={3}>
                  <CodeEditor code={code} setCode={setCode} />
                </Box>
                <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    Difficulty: {samplePythonCodes[activeTab].difficulty}
                  </Typography>
                  <CopyToClipboard text={code} onCopy={handleCopy}>
                    <Button variant="contained" color="primary" size="small">
                      {copied ? "Copied!" : "Copy Code"}
                    </Button>
                  </CopyToClipboard>
                </Box>
                {copied && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Code copied to clipboard!
                  </Alert>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
