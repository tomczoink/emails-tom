npm install
bin/mjml-compile "product-updates/18-12-20-OpenDataStreamingProgram/odsp-email.mjml"

for file in product-updates/*/index.mjml; do 
    if [ -f "$file" ]; then 
      bin/mjml-compile "$file" 
    fi 
done
