npm install
for file in product-updates/*.mjml; do 
    if [ -f "$file" ]; then 
      bin/mjml-compile "$file" 
    fi 
done