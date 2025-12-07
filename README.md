# rooster.os

## Auto-Auction Listing System

An automated system for creating auction listings from photos with AI-powered image processing, title generation, and description creation. Perfect for selling collectibles like silver coins, jewelry, antiques, and other items.

## Features

### 🤖 Autopilot Mode
- **Full automation**: Process hundreds of images hands-free
- **Toggle on/off**: Enable autopilot for best results or manual mode for control
- **Batch processing**: Handle entire directories of photos at once

### 📸 Image Cropper Bot
- **Auto-detect objects**: Automatically identifies and crops items in photos
- **Smart padding**: Adds optimal spacing around detected objects
- **Quality optimization**: Ensures images meet listing standards
- **Batch processing**: Handle multiple images simultaneously

### 📝 Title Generator Bot
- **AI-powered**: Generates compelling, SEO-optimized titles
- **Template-based**: Customizable templates for different item types
- **Smart formatting**: Automatically includes year, condition, type, and key details
- **Character limit aware**: Ensures titles fit platform requirements

### 📋 Description Generator Bot
- **Comprehensive sections**: Overview, specifications, condition, history, value proposition
- **Story generation**: Creates engaging narratives around items
- **Historical context**: Adds background information to increase value
- **Customizable**: Configure which sections to include

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pewpi-infinity/rooster.os.git
cd rooster.os
```

2. The scripts are ready to use with Python 3.6+

### Basic Usage

#### Process a Single Image
```bash
python scripts/autopilot_bot.py my_coin_photo.jpg output/
```

#### Batch Process Multiple Images (Autopilot Mode)
```bash
python scripts/autopilot_bot.py --batch input_photos/ output/
```

#### Use with Metadata
```bash
python scripts/autopilot_bot.py --batch --metadata examples/sample_metadata.json input_photos/ output/
```

#### Custom Configuration
```bash
python scripts/autopilot_bot.py --config config/autopilot-config.json --batch input_photos/ output/
```

## Individual Bot Usage

### Image Cropper Bot
```bash
# Single image
python scripts/bots/image_cropper_bot.py input.jpg output.jpg

# Batch processing
python scripts/bots/image_cropper_bot.py --batch input_dir/ output_dir/

# With custom config
python scripts/bots/image_cropper_bot.py --config config/autopilot-config.json input.jpg output.jpg
```

### Title Generator Bot
```bash
# Single image
python scripts/bots/title_generator_bot.py input.jpg titles.json

# Batch processing
python scripts/bots/title_generator_bot.py --batch input_dir/ titles.json

# From metadata
python scripts/bots/title_generator_bot.py --from-metadata metadata.json titles.json
```

### Description Generator Bot
```bash
# Single image
python scripts/bots/description_generator_bot.py input.jpg description.txt

# Batch processing
python scripts/bots/description_generator_bot.py --batch input_dir/ output_dir/

# With metadata
python scripts/bots/description_generator_bot.py --metadata metadata.json input.jpg description.txt
```

## Configuration

The system uses `config/autopilot-config.json` for configuration. Key settings:

### Autopilot Settings
```json
{
  "autopilot": {
    "enabled": true
  }
}
```

### Image Cropper Settings
```json
{
  "image_cropper": {
    "enabled": true,
    "auto_detect_objects": true,
    "padding_percent": 5,
    "min_width": 800,
    "min_height": 800,
    "output_format": "jpg",
    "quality": 95
  }
}
```

### Title Generator Settings
```json
{
  "title_generator": {
    "enabled": true,
    "max_length": 80,
    "include_year": true,
    "include_condition": true,
    "templates": [
      "{year} {type} {denomination} {condition}",
      "{type} {denomination} - {year} - {condition}"
    ]
  }
}
```

### Description Generator Settings
```json
{
  "description_generator": {
    "enabled": true,
    "include_history": true,
    "include_specifications": true,
    "include_story": true,
    "max_length": 5000,
    "sections": [
      "overview",
      "specifications",
      "condition",
      "history",
      "value_proposition"
    ]
  }
}
```

## Workflow

### Typical Autopilot Workflow

1. **Capture Photos**: Take photos of your items (e.g., 1000 silver coins)
2. **Organize**: Place all photos in an input directory
3. **Run Autopilot**: Execute the autopilot bot in batch mode
4. **Review Output**: Check generated listings in the output directory
5. **Upload**: Use generated titles, descriptions, and cropped images for your listings

### What Gets Generated

For each input image, the system creates:
- ✅ Cropped and optimized image
- ✅ SEO-optimized title
- ✅ Comprehensive description with multiple sections
- ✅ Processing summary with statistics

### Example Output Structure
```
output/
├── item1_cropped.jpg
├── item1_description.txt
├── item2_cropped.jpg
├── item2_description.txt
├── item3_cropped.jpg
├── item3_description.txt
└── processing_summary.json
```

## Use Cases

### Silver Coins
Perfect for numismatists with large coin collections. Process hundreds of coin photos automatically with proper titles and descriptions including:
- Year and denomination
- Mint marks
- Condition grades
- Historical context
- Silver content and value

### Collectibles
Works great for:
- Vintage jewelry
- Antiques
- Sports memorabilia
- Trading cards
- Stamps
- Fine art

### E-commerce
Ideal for:
- Online auction platforms
- Marketplace listings
- E-commerce product catalogs
- Inventory management

## Metadata Format

Provide additional information via JSON metadata:

```json
{
  "item_name": {
    "year": "1921",
    "type": "Silver Coin",
    "denomination": "Morgan Dollar",
    "mint_mark": "S",
    "condition": "Fine",
    "metal_content": "90% Silver, 10% Copper",
    "weight": "26.73 grams",
    "estimated_value": "$25-35"
  }
}
```

See `examples/sample_metadata.json` for a complete example.

## Value Proposition

### Time Savings
- **Manual listing**: 10-15 minutes per item
- **With autopilot**: Seconds per item
- **For 1000 items**: Save 150+ hours

### Consistency
- Standardized format across all listings
- Professional-quality descriptions
- Optimized for search engines

### Value Enhancement
- Historical context adds perceived value
- Professional presentation attracts buyers
- Detailed specifications build trust
- Story elements create emotional connection

## Advanced Features

### Token Generation (Future)
The system is designed to support blockchain token generation tied to physical items:
- NFT creation linked to items
- Provenance tracking
- Digital certificates of authenticity
- Cross-platform value tokens

### AI Integration
Current placeholders support integration with:
- OpenAI GPT-4 Vision API
- Google Cloud Vision API
- Custom computer vision models
- OCR for text extraction

### Platform Integration (Future)
- eBay API integration
- Etsy API integration
- Custom marketplace connections
- Inventory management systems

## Requirements

- Python 3.6 or higher
- No additional dependencies for basic functionality

### Optional Dependencies for Production Use
For actual image processing (not included in basic version):
```bash
pip install pillow opencv-python
```

For AI-powered analysis:
```bash
pip install openai google-cloud-vision
```

## Troubleshooting

### No images found
- Check that image files have supported extensions (.jpg, .jpeg, .png, .bmp, .tiff, .webp)
- Verify the input directory path is correct

### Processing fails
- Check file permissions
- Ensure output directory is writable
- Verify config file is valid JSON

### Generated content not optimal
- Provide metadata for better results
- Customize templates in config
- Adjust AI settings (temperature, model)

## Contributing

Contributions are welcome! Areas for enhancement:
- Integration with actual computer vision libraries
- AI model connections
- Platform API integrations
- Additional bot types
- Enhanced metadata extraction

## License

MIT License - See LICENSE file for details

## Support

For questions, issues, or feature requests, please open an issue on GitHub.

## Roadmap

- [ ] OpenCV integration for actual image cropping
- [ ] AI vision API integration
- [ ] Platform-specific listing formatters
- [ ] Mobile app for photo capture
- [ ] Cloud processing option
- [ ] Token/NFT generation
- [ ] Multi-language support
- [ ] Auction performance analytics

---

**Made for collectors, by collectors.** 🪙✨