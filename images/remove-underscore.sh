for file in _*; do
    mv -n -- "$file" "${file#_}"
done