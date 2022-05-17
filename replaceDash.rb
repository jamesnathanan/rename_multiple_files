Dir["./*"].each do |oldfile|
  newName = oldfile.gsub("-"," ")
  File.rename(oldfile, newName)
  puts "File #{oldfile} has been renamed!"
end
