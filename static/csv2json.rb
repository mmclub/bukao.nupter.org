require 'csv'
require 'json'

csv = CSV.parse(open("kaoshi.csv").read)

h = {}
csv.each do |row|
  if !h[row[5]] 
    h[row[5]] = []
  end
  h[row[5]] << row
end



open("test2014.json", "w") do |f|
  f.write JSON.pretty_generate(h)
end
