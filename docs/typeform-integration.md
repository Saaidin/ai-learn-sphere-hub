# Typeform Integration Guide

## Prerequisites
- Typeform account
- Existing React component to host the form

## Step 1: Create Typeform
1. Go to [Typeform](https://typeform.com) and create a new form
2. Add fields for:
   - Name (Short text)
   - Email (Email)
3. Configure form settings:
   - Enable "Show progress bar"
   - Set thank you screen message
4. Publish the form

## Step 2: Get Embed Code
1. Click "Share" on your published form
2. Select "Embed" tab
3. Choose "Standard" embed type
4. Copy the embed code snippet

## Step 3: Update React Component
```javascript
// In your React component
<div 
  data-tf-live="YOUR_FORM_ID" 
  data-tf-opacity="100" 
  data-tf-iframe-props="title=Your Form Title"
  data-tf-transitive-search-params
  data-tf-medium="snippet"
  style={{width: '100%', height: '400px'}}
></div>
<script src="//embed.typeform.com/next/embed.js"></script>
```

## Step 4: Handle Submission Events (Optional)
To track submissions and show custom success messages:
```javascript
useEffect(() => {
  const handleSubmission = (event) => {
    if (event.data.type === 'TF_SUBMIT_SUCCESS') {
      // Handle successful submission
      setIsSuccess(true);
    }
  };

  window.addEventListener('message', handleSubmission);
  return () => window.removeEventListener('message', handleSubmission);
}, []);
```

## Troubleshooting
- **Form Not Loading**: 
  - Verify the form ID is correct
  - Check network requests for errors
  - Ensure script is loaded before the embed div
- **Submission Issues**:
  - Verify form is published
  - Check Typeform account for submissions
- **Styling Issues**:
  - Adjust height/width as needed
  - Use Typeform's styling options