import app from './app.js'
import request from "supertest";

describe("App",()=>{
    it("Return success response and save file on localserver when valid",async()=>{
        const serviceResponse = {
            success: true,
            errorMessage: 'Success update',
        };
        // compressAccount.mockImplementation(() => serviceResponse);

        const response = await request(app)
            .put("/uploadImage")
            .send({ image: 'sd.jpg' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ success: true });
    })
})
