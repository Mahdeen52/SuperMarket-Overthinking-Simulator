const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

// Script to create admin user
const createAdminUser = async () => {
    try {
        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: 'admin@admin.com' });

        if (existingAdmin) {
            console.log('Admin user already exists');
            return;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin', salt);

        // Create admin user
        const admin = new User({
            username: 'admin',
            email: 'admin@admin.com',
            password: hashedPassword,
            role: 'admin'
        });

        await admin.save();
        console.log('✅ Admin user created successfully');
        console.log('Email: admin@admin.com');
        console.log('Password: admin');

    } catch (error) {
        console.error('❌ Error creating admin user:', error.message);
    }
};

module.exports = createAdminUser;
