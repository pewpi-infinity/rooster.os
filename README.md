# rooster.os

A token management system for rooster.os.

## Token Implementation

This repository contains a token system with the following components:

- `rooster_token.py`: Core Token class and TokenColor enum
- `main.py`: Main script to create and display the specified token
- `test_token.py`: Unit tests for the token implementation

## Usage

Run the main script to display the token:

```bash
python3 main.py
```

Output:
```
Token Number: 1054
Token Value: 2593
Token Color: RED
Token DateTime: 2025-12-05 22:33:45
```

## Running Tests

To run the unit tests:

```bash
python3 -m unittest test_token.py -v
```

## Token Properties

The token system supports the following properties:
- **Number**: Unique identifier for the token
- **Value**: Numeric value associated with the token
- **Color**: Color of the token (RED, BLUE, GREEN, YELLOW)
- **DateTime**: Timestamp associated with the token
