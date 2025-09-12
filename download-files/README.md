# 📁 Free Recipe Ebook Landing Page - JavaScript Files

## 🔧 How to Add Your Custom JavaScript

### **Option 1: Add _Ht() Function to Button Clicks**

In `page-component.tsx`, find the `handleEbookClick` function (around line 25) and replace it with:

```typescript
const handleEbookClick = () => {
  // Add your _Ht() function call here
  if (typeof (window as any)._Ht === 'function') {
    (window as any)._Ht();
  } else {
    console.log('_Ht function not available');
  }
}
```

### **Option 2: Add _Ht() to Page Load**

In `layout-component.tsx`, find the comment `{/* 🔧 ADD YOUR CUSTOM JAVASCRIPT HERE */}` and add:

```html
<script>
  window.addEventListener('load', function() {
    if (typeof _Ht === 'function') {
      _Ht();
    }
  });
</script>
```

### **Option 3: Both Page Load AND Button Clicks**

Combine both methods above for maximum coverage.

## 📋 Button Locations

All these buttons call `handleEbookClick()`:

1. **Hero Section**: "✅ Yes, Send Me The Free Ebook!"
2. **Breakfast & Brunch Section**: "✅ Yes, Send Me The Free Ebook!"
3. **Healthy Dinners Section**: "✅ Yes, Send Me The Free Ebook!"
4. **Fresh Salads & Sides Section**: "✅ Yes, Send Me The Free Ebook!"
5. **Meal Planning Tools Section**: "✅ Yes, Send Me The Free Ebook!"
6. **Final CTA**: "✅ Yes, Send Me The Free Ebook Now! →"

## 🔧 Your Current Scripts

Already included in the head:
```html
<script type="text/javascript">
  var rFimx_vwW_aaSQqc={"it":4548566,"key":"16b80"};
</script>
<script src="https://d167xx758yszc9.cloudfront.net/1fe0bf2.js"></script>
```

## 📂 Files Included

- `page-component.tsx` - Main landing page component
- `layout-component.tsx` - Layout with your tracking scripts
- `README.md` - This file with instructions

## 🚀 Implementation Steps

1. Copy the files to your Next.js project
2. Add your custom JavaScript as shown above
3. Test the _Ht() function calls
4. Deploy!

## 💡 Example Implementation

```typescript
// In handleEbookClick function:
const handleEbookClick = () => {
  console.log('Ebook button clicked');
  
  // Your custom _Ht() call
  if (typeof (window as any)._Ht === 'function') {
    (window as any)._Ht();
  } else {
    // Retry after a delay if function not loaded yet
    setTimeout(() => {
      if (typeof (window as any)._Ht === 'function') {
        (window as any)._Ht();
      }
    }, 1000);
  }
}
```

This gives you full control over when and how the _Ht() function is called!