puts "Enter your rarity weight: "
rate = gets.chomp

Dir["*"].each do |oldfile|
	File.rename(oldfile, oldfile[0...-4] + "#" + rate + ".png")
	puts "File #{oldfile} has been renamed!"
end
