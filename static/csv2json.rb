require 'csv'
require 'json'

csv = CSV.parse(open("bukao2013.csv").read)

h = {}
csv.each do |row|
  if !h[row[4]] 
    h[row[4]] = []
  end
  if row[4] == "B13040505" 
    row << "^_^ 补考必过~"
  end
  h[row[4]] << row
  

end



open("bukao2013.json", "w") do |f|
  f.write JSON.pretty_generate(h)
end
