Dir["./*"].each do |oldfile|
  newName = oldfile.sub("_","")
  newName = oldfile.sub(" ","")
  File.rename(oldfile, newName)
  puts "File #{oldfile} has been renamed!"
end
