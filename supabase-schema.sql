-- Clean up existing tables to ensure a fresh start
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

-- 1. Orders Table (Wholesale Enquiries)
CREATE TABLE orders (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name              TEXT NOT NULL,
  phone             TEXT NOT NULL,
  occasion          TEXT NOT NULL,
  quantity          INTEGER NOT NULL CHECK (quantity >= 50),
  message           TEXT,
  status            TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'confirmed', 'delivered', 'cancelled')),
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- 2. Reviews Table
CREATE TABLE reviews (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reviewer_name     TEXT NOT NULL,
  location          TEXT NOT NULL,
  rating            INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text       TEXT NOT NULL,
  is_featured       BOOLEAN DEFAULT false,
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public insert on orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on reviews" ON reviews FOR SELECT USING (true);

-- Seed 10 Reviews
INSERT INTO reviews (reviewer_name, location, rating, review_text, is_featured) VALUES
('Ravi Sharma', 'Jodhpur', 5, 'Best mithai boxes in Jodhpur! Ordered 200 boxes for my daughter''s wedding — everyone was impressed. Quality is outstanding!', true),
('Sunita Agarwal', 'Jaipur', 5, 'Corporate gifting sorted! Krishna Makers delivered 500 branded boxes on time. Highly recommend for bulk orders.', true),
('Mohit Verma', 'Jodhpur', 5, 'Diwali boxes were a hit! Beautiful packaging, amazing sweets. Will definitely order again this year!', true),
('Priya Mehta', 'Udaipur', 5, 'Custom birthday boxes with name printing — my kids loved it! Very affordable for bulk.', true),
('Ramesh Gupta', 'Jodhpur', 5, 'Manmohan ji and Kuldeep ji are so professional. Placed order for shagun boxes — perfect quality!', true),
('Anjali Singh', 'Bikaner', 5, 'Wholesale prices are the best in Rajasthan. I resell these boxes at festivals. Great margins!', true),
('Deepak Joshi', 'Jodhpur', 5, 'Ordered 300 boxes for office Diwali. The packaging design was elegant and delivery was on time.', true),
('Kavita Rathore', 'Barmer', 5, 'Pure ghee sweets, hygienic packing, and super fast delivery. 10/10 experience!', true),
('Suresh Patel', 'Jodhpur', 5, 'Attended their shop at Ramsagar Circle — very welcoming owners, great variety. Bulk discounts are real!', true),
('Nisha Kumari', 'Jaisalmer', 5, 'Wedding packing boxes were gorgeous. Guests kept asking where we got them. Absolutely worth it!', true);
