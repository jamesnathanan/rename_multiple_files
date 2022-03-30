Dir["./*"].each do |oldfile|
  newName = oldfile.gsub("_"," ")
  File.rename(oldfile, newName)
  puts "File #{oldfile} has been renamed!"
end
