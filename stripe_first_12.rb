
Dir["./target/*"].each do |oldfile|
	File.rename(oldfile, oldfile[0...-4] + "#10.txt")
	puts "File #{oldfile} has been renamed!"
end
