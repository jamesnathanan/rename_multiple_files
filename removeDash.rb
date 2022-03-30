Dir["./*"].each do |oldfile|
  newName = oldfile.gsub("_","")
  File.rename(oldfile, newName)
  puts "File #{oldfile} has been renamed!"
end

Dir["./*"].each do |oldfile|
  newName = oldfile.sub(" ","")
  File.rename(oldfile, newName)
  puts "File #{oldfile} has been renamed!"
end
